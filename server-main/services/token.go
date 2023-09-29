package services

import (
	"fmt"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(user User) (string, error) {
	secret := os.Getenv("JWT_SECRET")

	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"iss": "crest-server",
			"sub": user.IdUser,
			"exp": time.Now().Add(5 * time.Minute).Unix(),
		})

	tokenStr, err := token.SignedString([]byte(secret))
	if err != nil {
		return "", err
	}

	return tokenStr, nil
}

func VerifyToken(tokenStr string) (bool, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		if method, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("invalid signing method")
		} else if method != jwt.SigningMethodHS256 {
			return nil, fmt.Errorf("wrong signing method")
		}

		return []byte(os.Getenv("JWT_SECRET")), nil
	})

	if err != nil {
		return false, err
	}

	return token.Valid, nil
}

package services

import (
	"context"

	"golang.org/x/crypto/bcrypt"
)

type User struct {
	IdUser   int    `json:"id_user"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (user *User) SaveNewUser() error {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	hashedPass, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	if err != nil {
		return err
	}
	user.Password = string(hashedPass)

	query := `
		INSERT INTO users (email, password)
		VALUES ($1, $2)
	`

	_, err = db.Exec(ctx, query, user.Email, user.Password)
	if err != nil {
		return err
	}

	return nil
}

func (user *User) GetUserByEmail() (User, error) {
	ctx, cancel := context.WithTimeout(context.Background(), dbTimeout)
	defer cancel()

	query := `
		SELECT id_user, email, password
		FROM users
		WHERE email = $1
		LIMIT 1
	`
	rows, err := db.Query(ctx, query, user.Email)
	if err != nil {
		return User{}, err
	}

	var userDb User
	for rows.Next() {
		err := rows.Scan(&userDb.IdUser, &userDb.Email, &userDb.Password)
		if err != nil {
			return User{}, err
		}
	}

	return userDb, nil
}

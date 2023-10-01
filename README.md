<h1 align="center">
  <br>
  CREST: Real Estate for Everyone!
  <br>
  <br>
</h1>

## CREST

<p align= "center">
  <img width="280" src="https://github.com/RakaAdmiharfan/CREST/blob/main/client/public/Home/Logo.png">
</p>

<br>
<h4>Dipersembahkan oleh: Tim Indonesia Bagian Web</h4>
<h4>sebagai realisasi project untuk IFEST UNPAD 2023.</h4>

Anggota:
<ul>
  <li>Amjad Adhie Prasetyo</li>
  <li>Iskandar Muda Parlambang</li>
  <li>Johan Hariara Sijabat</li>
  <li>Nicholas</li>
  <li>Raka Admiharfan Fatihah</li>
</ul>
<br>

## Cara pengoperasian

<h4>1.	Clone github crest
  <br>
  <br>
2.	Pastikan anda di branch main
  <br>
  <br>
3.	Buatlah file .env pada folder client dengan isi (untuk menjalankan api openAI):
NEXT_PUBLIC_OPENAI_KEY=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
  <br>
  <br>
4.	Install Docker Desktop dan jalankan Docker Desktop
  <br>
  <br>
5.	Bukalah 2 terminal seperti berikut 1 pada path root project dan path client</h4>
<br>
<br>

![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/f06c5146-d562-4f05-b67f-04788aae32a9)
<br>
<br>
<h4>
6.	Pada path client ketik code ini, untuk memastikan bahwa akan membuat build baru:
  <br>
docker compose down
  <br>
docker volume rm crest-postgres-db
  <br>
  </h4>
  
 ![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/91ca4a65-771c-4516-bda4-5b413d7bca65)
![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/e444a010-f919-473d-8b99-c40eafddf3b8)

<h4>
7.	Lalu, pada path yang sama ketik code:
   <br>
docker compose up –build
</h4>
<br>

![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/bc548c69-0ea4-48a4-9abd-f71847bc82d7)

 <h4>
8.	Setelah selesai, hit endpoint http://localhost:5000/api/v1/train dengan method post tanpa body dan parameter untuk train ai dengan machine learning
   <br>
 </h4>
   
   ![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/b41b2e74-3445-4659-b18f-dea5eb000aae)

 <br>
 <h4>
9.	Setelah selesai, ketiklah npm i pada path client
<br>
   
 ![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/2bfceccf-4984-4dc2-997d-052f69b79bcd)
 </h4>

 <h4>
10.	Lalu, pada path yang sama ketiklah npm run dev
   <br>
   
 ![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/cb3925aa-0d35-41f8-a704-b755975c6e56)
 
 </h4>

 <h4>
11.	Downloadlah extension CORS Unblock pada platform yang digunakan untuk membuka website untuk unblock CORS
<br><br>
   12.	Bukalah http://localhost:3000 untuk menjalankan websitenya
 </h4>

![image](https://github.com/RakaAdmiharfan/CREST/assets/69570302/89d2acc3-65b8-46ba-a15b-158ab74c4d84)
## Website Overview
CREST adalah aplikasi berbasis web yang berfunsgi untuk melakukan prediksi harga real estate berdasarkan data-data yang diolah menggunakan Intelegensi Buatan. CREST bertujuan untuk memberikan insight market real estate pada investor berpengalaman maupun pemula untuk menjalankan perjalanan investasi mereka
<br>
CREST dibekali dengan data-data real estate yang diupdate secara real time untuk melakukan prediksi harga ke depannya berdasarkan berbagai faktor untuk menjalankan dua fitur utama yaitu marketplace dan Simulasi.
<br>
Marketplace ditujukan untuk investor berpengalaman untuk melakukan pembelian untuk investasi mereka dan berbekali fitur prediksi harga yang dapat mempermudah proses investasi secara signifikan dan menghilangkan rasa kecemasan dan kebingungan saat melakukan investasi real estate.
<br>
Simulasi bertujuan untuk memberikan pengetahuan bagi investor pemula untuk mengetahui apa yang terjadi behind the scenes dalam fluktuasi harga real estate. Mereka dapat melakukan simulasi investasi real estate yang menyerupai game dan mendapatkan report dan portofolio di akhir yang memberitahu apa yang terjadi dan bagaimana mereka dapat meningkatkan kemampuan dan strategi mereka dalam berinvestasi real estate
<br>
Selain itu, CREST juga memiliki page FAQ, Contact dan Landing Page yang informatif agar user dapat dengan mudah mempelajari fitur-fitur yang ada pada website dan cara menggunakannya.
<br>
Tech Stacks:
<ul>
  <li>Next.js</li>
  <li>Golang</li>
  <li>Tailwind</li>
  <li>Figma</li>
  <li>PostgreSQL</li>
  <li>Tensorflow</li>
  <li>Python</li>
  <li>AWS</li>
</ul>

<br />
<div align="center">
  <h3 align="center">Whatsapp and email automation</h3>

  <p align="center">
    An awesome script that automate sending messages and files over smtp protocol or whatsapp
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

There's many great whatsapp and email automation scripts available on Github; however, I didn't find and script that automate both of them so I created this one.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- [pptr.dev]: https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png
[puppeteer-url]: https://pptr.dev/
[nodemailer.com]: https://nodemailer.com/nm_logo_200x136.png
[nodemailer-url]: nodemailer.com
[nodejs.org]: https://nodejs.org/static/images/logo.svg
[nodejs-url]: https://nodejs.org/en/download/ -->

- <a href="https://pptr.dev/"><img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="50px"></a>
- [![Nodemailer][nodemailer.com]][nodemailer-url]{ height=200px }

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow next section to see how you can install this project locally

### Prerequisites

- [![Node.js][nodejs.org]][nodejs-url]{ height=200px }
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Ahmed9190/whatsapp-email-automation.git
   ```
2. ```sh
   cd whatsapp-email-automation
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file in the root of the project
   ```sh
   touch .env
   ```
5. Enter your API in `.env`
   ```
    EMAIL_SERVICE=""
    EMAIL=""
    PASSWORD=""
    ENCRYPTION_KEY="#W7Vf6*VuZmmxwWt"
   ```
6. You can change the encryption key if you want.
7. Build Javascript code from Typescript code
   ```sh
   npm run build
   ```
8. Change directory to dist folder
   ```sh
   cd dist
   ```
9. Set the email service by replacing <service> by either **google** or **microsoft**
   ```sh
   node index.js email_service <service>
   ```
10. Set email address by replacing <email> by your email address

```sh
node index.js email <email>
```

11. Set password by replacing <password> by your password

```sh
node index.js password <password>
```

> **Note**
> Don't worry your password will be encrypted

> **Note**
> If you use a google account, you don't need to type your password
> Follow this tutorial to get a password
> https://www.youtube.com/watch?v=thAP7Fvrql4&t=172s 12. Open whatsapp to scan QR then close the browser

    ```sh
    node index.js whatsapp_open
    ```

> **Warning**
> If you rebuild the code again like in step 7 you have to rescan the QR again

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Send email

```sh
node index.js email_send to <receiver email> subject <title> text <text> file_path ./index.js
```

- Example
  ```sh
  node index.js email_send to "example@gmail.com" subject "An attachment" text "Hello, please check the attached file" file_path ./index.js
  ```

### Send whatsapp message

```sh
node index.js whatsapp_send_message number <phone number> message <message>
```

- Example
  ```sh
  node index.js whatsapp_send_message number "+20123456789" message "Hello!"
  ```

### Send whatsapp file

```sh
node index.js whatsapp_send_file number <number> file_path <file_path>
```

- Example
  ```sh
  node index.js whatsapp_send_file number "+20123456789" file_path ./index.js
  ```

> **Note**
> Please make sure that you receive **Sent** response in command line or terminal

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[pptr.dev]: https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png
[puppeteer-url]: https://pptr.dev/
[nodemailer.com]: https://nodemailer.com/nm_logo_200x136.png
[nodemailer-url]: nodemailer.com
[nodejs.org]: https://nodejs.org/static/images/logo.svg
[nodejs-url]: https://nodejs.org/en/download/

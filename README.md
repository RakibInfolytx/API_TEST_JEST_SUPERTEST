# Jest and SuperTest API Testing Framework

A **scalable and lightweight API testing framework** using **Jest** and **SuperTest**.

---

## 📦 Prerequisites

Make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/en/) [my node version = v20.19.2]
- [Visual Studio Code](https://code.visualstudio.com/)
- Basic understanding of [JavaScript](https://testautomationu.applitools.com/javascript-tutorial/)

---

## 🚀 Getting Started

### 🔧 Clone the Repository

```bash
git clone https://github.com/RakibInfolytx/API_TEST_JEST_SUPERTEST.git
cd API_TEST_JEST_SUPERTEST
```

### 📥 Install Dependencies

```bash
npm install
```

Install the HTML reporter (optional but recommended for reporting):

```bash
npm install jest-html-reporter
```

---

## 🧪 Run the Tests

```bash
npm test
```

Test results will be displayed in the terminal. If using `jest-html-reporter`, an HTML report will be generated in the root directory.

---

## 📁 Project Structure (Optional Section)

```
.
├── reports/
│   └── Test-report.html    # html report
├── tests/
│   └── restAPI.spec.js     # REST API test using SuperTest + Chai + Jest
│   └── soapAPI.spec.js     # SOAP API test using SuperTest + Chai + Jest
├── package.json
└── README.md
```

---

## ✨ Features

- Easy setup and configuration
- Supports both REST and SOAP APIs
- Scalable test structure
- HTML test reports (optional)

---

## 📬 Contact

Created by [Rakib Hasan](https://github.com/RakibInfolytx) – feel free to reach out for questions or contributions!
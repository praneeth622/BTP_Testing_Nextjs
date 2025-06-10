# BTP_Testing_Nextjs

This repository contains a sample [Next.js](https://nextjs.org) application, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), and demonstrates integration and deployment with **SAP Business Technology Platform (SAP BTP)**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [SAP BTP Deployment Highlights](#sap-btp-deployment-highlights)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Learn More](#learn-more)
- [License](#license)

---

## Project Overview

This project is a modern web application built with Next.js, designed to be easily deployed on SAP BTP. It serves as a template for integrating React-based frontends with SAP BTP services, such as authentication, destinations, and managed hosting.

---

## SAP BTP Deployment Highlights

- **Seamless Deployment:** The app is configured for deployment on SAP BTP, leveraging the Cloud Foundry environment.
- **Managed Services Integration:** Easily connect to SAP BTP services (e.g., XSUAA for authentication, destinations for backend connectivity).
- **Environment Configuration:** Uses environment variables and manifest files for SAP BTP compatibility.
- **Scalable Hosting:** Take advantage of SAP BTP's scalable, enterprise-grade infrastructure.
- **CI/CD Ready:** Can be integrated into SAP BTP CI/CD pipelines for automated deployments.

> **Note:** For a step-by-step SAP BTP deployment guide, see the [Deployment](#deployment) section below.

---

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd BTP_Testing_Nextjs/my-next-app
npm install
```

Next, configure the environment variables. Create a copy of the example environment file:

```bash
cp .env.example .env
```

Update the `.env` file with your SAP BTP service credentials and other configuration settings.

Finally, run the development server:

```bash
npm run dev
```

Your Next.js app should now be running on [http://localhost:3000](http://localhost:3000).

---

## Development

To start developing your Next.js app, follow these guidelines:

- Use **React components** to build your UI. Components are the building blocks of your application.
- Manage **global state** and **side effects** using React hooks like `useState`, `useEffect`, and custom hooks.
- Utilize **Next.js features** such as API routes, dynamic routing, and image optimization to enhance your application.
- Refer to the [Next.js documentation](https://nextjs.org/docs) for in-depth guidance on Next.js capabilities.

---

## Deployment

To deploy your Next.js app on SAP BTP, follow these steps:

1. **Build your application** for production:

   ```bash
   npm run build
   ```

2. **Deploy to SAP BTP** using the Cloud Foundry CLI:

   ```bash
   cf push <your-app-name> -f manifest.yml
   ```

   Ensure that your `manifest.yml` file is correctly configured with your app's settings and SAP BTP service bindings.

3. **Access your deployed app** at the URL provided by SAP BTP after the deployment is complete.

For detailed deployment instructions and troubleshooting, refer to the [SAP BTP documentation](https://help.sap.com/viewer/product/SAP_BUSINESS_TECHNOLOGY_PLATFORM/).

---

## Project Structure

The project is organized as follows:

```
my-next-app/
├── public/                  # Static assets
├── src/                     # Source files
│   ├── components/          # React components
│   ├── pages/               # Next.js pages
│   ├── styles/              # CSS/SCSS styles
│   └── utils/               # Utility functions
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # NPM package configuration
└── README.md                # Project documentation
```

---

## Learn More

To learn more about Next.js and SAP BTP, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [SAP Business Technology Platform Documentation](https://help.sap.com/viewer/product/SAP_BUSINESS_TECHNOLOGY_PLATFORM/)
- [SAP BTP Developer Guide](https://developers.sap.com/topics/business-technology-platform.html)

---

## License

This project is licensed under the [MIT License](LICENSE).
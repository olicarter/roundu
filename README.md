# Roundu  

Roundu is a platform for turning local ideas into action. Whether you want to improve your surroundings, find collaborators, or support projects with time, skills, or funding, Roundu connects people who want to make a difference.  

## Tech Stack  

- **Framework:** [Next.js](https://nextjs.org/)  
- **Language:** TypeScript  
- **Package Manager:** pnpm / npm / yarn (based on project setup)  

## Project Structure  

```
roundu/  
├── packages/  
│   ├── web/              # Next.js frontend  
│   │   ├── pages/  
│   │   ├── components/  
│   │   ├── styles/  
│   │   ├── public/  
│   │   ├── package.json  
│   │   └── tsconfig.json  
│   └── ... (future packages)  
├── package.json  
├── README.md  
└── ... (other configs)  
```

## Getting Started  

### Prerequisites  

Ensure you have the following installed:  
- **Node.js** (latest LTS recommended)  
- **pnpm** (or npm/yarn)  

### Installation  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/yourusername/roundu.git  
cd roundu  
pnpm install  # or npm install / yarn install
```

### Running the Project  

Start the Next.js app in development mode:  

```bash
pnpm dev  # or npm run dev / yarn dev
```

The app will be available at `http://localhost:3000`.  

## Contributing  

Contributions are welcome! To get started:  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Add feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a pull request  

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

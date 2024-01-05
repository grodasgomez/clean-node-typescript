# Clean Node TypeScript API

## Description
This repository demonstrates a simple yet powerful approach to building a Node.js server using clean architecture principles. The project is structured to promote maintainability, scalability, and easy understanding.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- Docker (optional, for containerization)

## Installation
To set up the project, follow these steps:
1. Clone the repository:
```
git clone [repository-url]
```

2. Navigate to the project directory:
```
cd clean-node-typescript
```

3. Install dependencies:
```
npm install
```


## Setting Up the Environment
- Copy `.env.example` to `.env` and update the environment variables as needed:
```
cp .env.example .env
```



## Running the Application
To run the application locally:
```
npm run dev
```

## Docker Support
To use Docker for setting up the environment and running the application:
- Create the container and install dependencies without building the image manually:
```
docker-compose run --rm app npm i
```

- Then, you can start the application with:
```
docker-compose up
```

## Contributing
Contributions are welcome! Please feel free to submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
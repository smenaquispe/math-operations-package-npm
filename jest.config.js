module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testMatch: ['**/tests/**/*.test.ts'], // Asegúrate de que los archivos de prueba estén en un directorio 'tests' y terminan en .test.ts
    transform: {
      '^.+\\.ts$': 'ts-jest', // Usa ts-jest para transpilar archivos .ts
    },
  };
  
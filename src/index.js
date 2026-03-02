// Demo MCP - Entry Point

const greeting = (name) => {
  return `Hello, ${name}! This file was created via MCP.`;
};

console.log(greeting('World'));

module.exports = { greeting };

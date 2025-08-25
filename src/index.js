const { generateSecurePassword } = require("./generator");

function main() {
    const password = generateSecurePassword(16);
    console.log("🔑 Senha segura gerada:", password);
}

main();
function convertCapacity() {
    // Obtiene el valor de la cantidad ingresada
    const inputAmount = parseFloat(document.getElementById('inputAmount').value);
    // Obtiene la unidad seleccionada
    const inputUnit = document.getElementById('inputUnit').value;

    // Verifica si el valor ingresado es un número válido
    if (isNaN(inputAmount)) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Factores de conversión
    const conversionFactors = {
        GAL: { GAL: 1, L: 3.78541, BOT: 5.04722 }, // 1 galón = 3.78541 litros, 1 galón = 5.04722 botellas
        L: { GAL: 0.264172, L: 1, BOT: 1.33333 },  // 1 litro = 0.264172 galones, 1 litro = 1.33333 botellas
        BOT: { GAL: 0.198129, L: 0.75, BOT: 1 }    // 1 botella = 0.198129 galones, 1 botella = 0.75 litros
    };

    // Realiza las conversiones
    const galResult = inputAmount * conversionFactors[inputUnit].GAL;
    const lResult = inputAmount * conversionFactors[inputUnit].L;
    const botResult = inputAmount * conversionFactors[inputUnit].BOT;

    // Actualiza los resultados en el DOM
    document.getElementById('galResult').textContent = `${galResult.toFixed(2)} GAL`;
    document.getElementById('lResult').textContent = `${lResult.toFixed(2)} L`;
    document.getElementById('botResult').textContent = `${botResult.toFixed(2)} BOT`;
}
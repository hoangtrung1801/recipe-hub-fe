export default function compareInstructions(instructions, newInstructions) {
    let diffInstructions = [];
    newInstructions.forEach((instruction) => {
        if (!instruction["id"]) {
            diffInstructions.push(instruction);
        } else {
            const prevInstruction = instructions.find((item) => item.id === instruction.id);

            // COMPARE description
            if (prevInstruction.description !== instruction.description) {
                diffInstructions.push(instruction);
            }
        }
    });

    return diffInstructions;
}

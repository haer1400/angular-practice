export class Product {
    name: string;
    stackSize: number;
    craftingTime: number;
    craftingStack: number;

    constructor(name: string, stackSize: number, craftingTime: number, craftingStack: number) {
        this.name = name;
        this.stackSize = stackSize;
        this.craftingTime = craftingTime;
        this.craftingStack = craftingStack;
    }
}

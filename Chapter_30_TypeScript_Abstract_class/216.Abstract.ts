abstract class BaseTest{
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    runTest(): void {
        console.log(`Running test: ${this.testName}`);
        this.setup();
        this.execute();
        this.teardown();
    }
    
    loan1(): void {
        console.log("Hi");
    }
}

class UITest extends BaseTest {
    setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
    loan(): void {
        console.log("  GIVE LOAN");
    }
}

const uiTest = new UITest("Login Page Test");
uiTest.setup();
uiTest.loan();
uiTest.loan1();


//#region Base Classe Departement
abstract class Departement {
  static fiscalYear = 2020;
  //   private readonly id : string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //readonly extra lair of security
    // this.name = n;
    // private id : string;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Departement): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//#endregion
//#region ITDepartement 
class ITDepartement extends Departement {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("IT departement ID : " + this.id);
  }
}
//#endregion
//#region AccountingDepartement
class AccountingDepartement extends Departement {
  private lastReport: string;
  private static instance :AccountingDepartement; 

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please passe a valid value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance(){
    if(this.instance){
        return this.instance;
    }
    this.instance = new AccountingDepartement('d4',[]);
    return this.instance;
  }
  describe() {
    console.log("Accounting Departement - Id " + this.id);
  }

  addEmployee(name: string) {
    if (name === "max") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}
//#endregion
const employee1 = Departement.createEmployee("Neo");
console.log(employee1, Departement.fiscalYear);

const IT = new ITDepartement("d1", ["Maximus"]);
const accountingCopy = { name: "Dummy", describe: IT.describe };

IT.addEmployee("Max");
IT.addEmployee("Manu");
IT.name = "IT"; //exemple to prove that public is accecible than private "accountin.employees[2] = 'Anna'"
IT.printEmployeeInformation();

console.log(IT);

// const accounting = new AccountingDepartement("d2", []);
const accounting = AccountingDepartement.getInstance();
const accounting2 = AccountingDepartement.getInstance();
console.log(accounting,accounting2);

(accounting.mostRecentReport = "Year and Report"),
  accounting.addReports("Beware of the dragons");
accounting.addEmployee("max");
accounting.addEmployee("Link");
// accounting.printEmployeeInformation();
// accounting.printReports();
accounting.describe();
console.log(accounting.mostRecentReport);

export interface IContact {
  name: string;
  phonenumber: string;
}
export default class ContactService {
  public getContacts() {
    return [
      {
        name: "Mo",
        phonenumber: "1234",
      },
      {
        name: "Jia",
        phonenumber: "415-606-4041",
      },
    ];
  }
}

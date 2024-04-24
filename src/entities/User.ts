/**
 * {
  "username": "vquang",
  "password": "vquang123",
  "fullname": "Vinh quang",
  "phone": "0123456789",
  "address": "Hồ Chí Minh",
  "gender": "M",
  "birth": "06-12-2003"
}
 */
import apiRequest from "../Api/ApiRequest";

export default class User {
   public username: string;
   public password: string;
   public fullname: string;
   public phone: string;
   public address: string;
   public gender: string;
   public birth: string

    constructor(username: string, password: string, fullname: string, phone: string, address: string, gender: string, birth: string) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
        this.birth = birth;
    }

    toJson() {
        return {
            "username": this.username,
            "password": this.password,
            "fullname": this.fullname,
            "phone": this.phone,
            "address": this.address,
            "gender": this.gender,
            "birth": this.birth
        }
    }

    //getAllUser
    public static async getAllUser(): Promise<User[] | null> {
        const res = await apiRequest("GET", "/users");
        return res;
    }

    //getUserByUsername
  public static async getUserByUserName(username: string): Promise<User | null> {
    const res = await apiRequest("GET", `/users/find/${username}`);
    return new User(res.username, res.password, res.fullname, res.phone, res.address, res.gender, res.birth);
  }

  //updateUserByUsername
  public static async updateUserByUsername(username: string, user: User): Promise<any> {
    const res = await apiRequest('PUT', `/users/update/${username}`, user.toJson());
    return res;
  }

  //deleteUserByUsername
  public static async deleteUserByUsername(username: string): Promise<any> {
    const res = await apiRequest('DELETE', `/users/delete/${username}`);
    return res;
  }
}
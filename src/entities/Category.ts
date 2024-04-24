/** {
        "categoryId": "M",
        "categoryName": "ManhBut"
    }
 */
import apiRequest from "../Api/ApiRequest";
export default class Category{
    //Fields
    private categoryId: string;
    private categoryName: string;
    
    //Constructors
    public constructor(categoryId: string, categoryName: string){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

    //Return Json
    toJson(){
        return {
            "categoryId": this.categoryId,
            "categoryName": this.categoryName
        }
    }

    //GetAllCategory
    public static async getAllCategory(): Promise<Category[] | null>{
       const res = await apiRequest("GET", "/categories");
       if(res.status === 200){
            const data = res.json();
            return data.map((item: any) => new Category(item.categoryId, item.categoryName));
       }
       else{
            return null
       }
    }

    //insertCategory
    public static async insertCategory(category: Category): Promise<boolean>{
        const res = await apiRequest('POST', '/categories/add', category.toJson() );

        if(res.status === 200){
            return true;
        }
        return false;
    }
    
}

const db = require("../util/database");

module.exports = class Product {
    constructor( t, a, price ) {
        this.title = t;
        this.author = a;
        this.price = price;
        // this.description = "It was good it was bad it was ugly";
    }
    save() {
            return db.execute( 'insert into Product (title, price, author) ' +
                'values (?, ?, ?)',
                [this.title, this.price, this.author ]
            )
    }
    static delete( id ) {
        return db.execute( "delete from Product where id = ?",
            [id]
        )
    }
    static fetchAll(){
      return db.execute( "select * from Product");
    }
    static findById( id ){
        return db.execute( "select * from Product where id = ?",
            [id] );
    }
}
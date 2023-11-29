const db = require("../util/database");

module.exports = class Product {
    constructor( t, a, price ) {
        this.title = t;
        this.author = a;
        this.price = price;
        this.description = "It was good it was bad it was ugly";
    }
    save() {
            return db.execute( 'insert into products (title, price, author, description) ' +
                'values (?, ?, ?, ?)',
                [this.title, this.price, this.author, this.description ]
            )
    }

    static delete( id ) {
        return db.execute( "delete from products where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from products");
    }
    static findById( id ){
        return db.execute( "select * from products where id = ?",
            [id] );
    }
}
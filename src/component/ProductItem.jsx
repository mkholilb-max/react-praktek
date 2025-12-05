export default function ProductItem() {
    const product = [
  {
    name: "iPhone 15 Pro",
    price: 18999000,
    inStock: true
  },
  {
    name: "Samsung Galaxy S24",
    price: 15999000, 
    inStock: false
  },
  {
    name: "MacBook Air M3",
    price: 23999000,
    inStock: true
  },
  {
    name: "iPad Pro",
    price: 12999000,
    inStock: true
  },
  {
    name: "AirPods Pro",
    price: 3999000,
    inStock: false
  },
  {
    name: "Apple Watch Series 9",
    price: 7999000,
    inStock: true
  }
];
        const instock = product.inStock ? "Tersedia" : "Tidak Tersedia";
    return (
        <div>
            {product.map((item, index) => {
                const status = item.inStock ? "Tersedia" : "Habis";
                const harga = item.price.toLocaleString('id-ID', { 
                    style: 'currency', 
                    currency: 'IDR' 
                });
                
                return (
                    <div className="p-1 w-[250px]">
                    <div key={index} className="border text-center text-sm">
                        <h3 className="text-xl">{item.name}</h3>
                        <p>Harga: {harga}</p>
                        <p>Status: {status}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
const Product = () => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full"
                    src="https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Botella de agua"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Botella térmica</div>
                    <ul className="text-gray-700 text-base">
                        <li>Descripción: diseñada para mantener la temperatura de los líquidos en su interior, ya sea caliente o fría, durante un período extendido de tiempo no mayor a 8 horas.</li> 
                        <li>Precio: $10000</li> 
                        <li>SKU: 565656-AAWEP-44545</li> 
                        <li>Stock: 497</li>       
                    </ul>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #bottle
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #water
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #botella
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Product;

var fs = require('fs');

module.exports =function(){

	this.productNames = function(filePath){	

		//console.log("...");

		var linesInfile = fs.readFileSync(filePath, 'utf8');
		//console.log("file details : " + linesInfile);

		var rows = linesInfile.split('\n');
		console.log(rows.length);

		var listOfProduct = [];

		var lineNumber = 0;

		rows.forEach(function(row) {
			if(lineNumber != 0){

				var columns = row.split(';');
				var currentItem = columns[2];
				var numberSold = Number(columns[3]);
				var earnings = Number(columns[4]);

				var salesObj = {
					itemName: currentItem,
					soldItem: numberSold,
					SalesPrice: earnings
				};

				listOfProduct.push(salesObj);
			}
			lineNumber = lineNumber +1;
		});

		return listOfProduct;
	}


	this.groupItems = function(listOfProduct){
	    	var itemMap = {};
		listOfProduct.forEach(function(product){
			var currentItem = product.itemName;
			var numberSold = product.soldItem;
			var earnings = product.SalesPrice;

			if(itemMap[currentItem]=== undefined){
				itemMap[currentItem]=0;
			}

			itemMap[currentItem] =itemMap[currentItem]+ Number(numberSold) + Number(earnings);

		});
		return itemMap;
		//console.log("this is itemmap" + itemMap);
	}; 

	this.mostpopularproducts= function(itemMap){
		var mostPopularProdct = {};
		var max = 0;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] > max){
				max = itemMap[prop];
				mostPopularProdct = {
					name: prop,
					amt: max

				}
			};
		}
		return mostPopularProdct;
	};

	this.leastpopularproducts= function(itemMap){
		var leastPopularProdct = {};
		var min = 172;
		for(var prop in itemMap){
			var value = itemMap[prop];
			if(itemMap[prop] < min){
				min = itemMap[prop];
				leastPopularProdct = {
					name: prop,
					amt: min
				}
			};
		}
		return leastPopularProdct;
	}

	this.groupCateg = function(listOfProduct) {
       	
       	var categoryProductMapping = {};
        var categoryMap = {
			'Milk':'Dairy Product',
			'Imasi':'Dairy Product', 
			'Bread':'Bakery Product', 
			'Gold Dish Vegetable Curry Can': 'Can Food', 
			'Fanta 500ml':'cold Beverages', 
			'Coke 500ml':'cold Beverages', 
			'Cream Soda 500ml':'cold Beverages', 
			'Iwisa Pap 5kg':'Bulk', 
			'Top Class Soy Mince': 'Can Food', 
			'Shampoo 1 litre':'cosmetics', 
			'Soap Bar':'Cosmetics', 
			'Bananas - loose': 'fruits',
			'Apples - loose':'fruits', 
			'Mixed Sweets 5s':'Confectionarie', 
			'Heart Chocolates':'Valentine Goodies', 
			'Rose (plastic)': 'Valentine Goodies',
			'Valentine Cards':'Valentine Goodies'
		};

		listOfProduct.forEach(function(product){
			var currentItem = product.itemName;
			var numberSold = product.soldItem;
			var currentCategory = categoryMap[currentItem]

			// categoryProductMapping

			//categoryMap

			if(categoryProductMapping[currentCategory]=== undefined){
				categoryProductMapping[currentCategory]=0;
			}

		categoryProductMapping[currentCategory]=categoryProductMapping[currentCategory] + Number(numberSold);

		});

		return categoryProductMapping;

	};

	this.mostPopularCtg = function(CatMap){
		var mostPopularCategory = {};
		var max = 0;
		for(var Cat in CatMap) { 			
		var value = CatMap[Cat];
		    if(value > max) {
			max = CatMap[Cat];
			mostPopularCategory = {
				name : Cat,
				amt  : max
			}
			
		};

	};
			//console.log(mostPopularCategory);
			return mostPopularCategory;

		};



		this.leastPopularCtg = function(CatMap){
			var leastPopularCategory = {};
			var min = 0;
			for(var Cat in CatMap) {
				var value = CatMap[Cat];
				if(CatMap[Cat] + min) {
					min = CatMap[Cat];
					leastPopularCategory = {
						name : Cat,
						amt  : min
					}
				};
			};
			return leastPopularCategory;
		};
	};
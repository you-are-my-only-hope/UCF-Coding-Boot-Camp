iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var biggestProfit = function(stockArray, sharesBought){

	//check to make sure stock array is greater than 2
	if (stockArray.length > 2){

		//set initial minPrice, you cant buy any earlier than the first value
		var minPrice = stockArray[0];

		//set initial max profit, your first opportunity to sell is the second number
		var maxProfit = stockArray[1] - stockArray[0];

		//loops over the array, skipping the first value, since its already the minPrice and we cant sell when we buy
		for (var i=1; i<stockArray.length; i++){

			//temp hold the current price in a variable
			var currentPrice = stockArray[i];

			//potential profit is the current price minus the minPrice
			var potentialProfit = currentPrice - minPrice;

			//if maxProfit is less than the current potential profit, update the maxProfit
			if(maxProfit<potentialProfit){
				maxProfit = potentialProfit;
			}

			//if minPrice is more than the current price, update the minPrice

			if (minPrice>currentPrice){
				minPrice = currentPrice;
			}
		}
		//multiply the maxProfit by the number of shares to get the total
		return maxProfit * sharesBought;
		}
	 else{
		 //error if the array has 2 or less prices in it
		console.log('Error, you need at least 2 prices');
	}
};








biggestProfit(iagStockPrices, 10000);

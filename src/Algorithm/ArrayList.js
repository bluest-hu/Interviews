
const boubleSort = (list) => {
	let length = list.length;
	let temp;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - 1; j++) {
			if (list[i] >= list[j]) {
				temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
	}
	return list;
}

class ArrayList {
	constructor() {
		this.list = [];
	}
	boubleSort() {
		boubleSort(this.sort);
	}



	push(item) {
		this.list.push(item)
	}


}

export default ArrayList;

export class arXiv{
  constructor(au, ti, id, cat){
    this.au = au;
    this.ti = ti;
    this.id = id;
    this.cat = cat;
  }

  fH() {
    return this.au + ", <i>" + this.ti + "</i>, arXiv:<a href =\"https://arxiv.org/abs/" + this.id + "\" target+\"_blank\">" + this.id + "</a> [" + this.cat + "]";
  }

  fT(){
    return this.au + ", ``" + this.ti + "'', arXiv:\\texttt{" + this.id + "} [\\texttt{" + this.cat + "}]";
  }
}

export const preprints = [
  new arXiv(
    "P. De Donato",
    "The Stepanov theorem for Q-valued functions",
    "2402.14554",
    "math.MG"
  )
];


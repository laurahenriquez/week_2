export class Vector {
  private elements: number[];

  constructor(n: number, k: number) {
    this.elements = new Array(n);
    for (let i = 0; i < n; i++) {
      this.elements[i] = Math.floor(Math.random() * k);
    }
  }

  public print() {
    console.log(this.elements);
  }

  public add(v1: Vector): Vector {
    let v2 = new Vector(v1.elements.length, 0);
    for (let i = 0; i < v1.elements.length; i++) {
      v2.elements[i] = this.elements[i] + v1.elements[i];
    }
    return v2;
  }

  public subs(v1: Vector): Vector {
    let v2 = new Vector(v1.elements.length, 0);
    for (let i = 0; i < v1.elements.length; i++) {
      v2.elements[i] = this.elements[i] - v1.elements[i];
    }
    return v2;
  }

  public mult(v1: Vector): Vector {
    let v2 = new Vector(v1.elements.length, 0);
    for (let i = 0; i < v1.elements.length; i++) {
      v2.elements[i] = this.elements[i] * v1.elements[i];
    }
    return v2;
  }

  public multNumber(n: number): Vector {
    let v2 = new Vector(this.elements.length, 0);
    for (let i = 0; i < this.elements.length; i++) {
      v2.elements[i] = this.elements[i] * n;
    }
    return v2;
  }
}

/**
 * Copyright 2019
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://github.com/elijahjcobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * ORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

import {Iter} from "@ejc-tsds/iter";
import {ArrayList} from "@ejc-tsds/arraylist";

export class Stack<T> extends Iter<T> {

	private list: ArrayList<T>;

	public constructor(arr?: T[]) {

		super();

		if (arr) this.list = new ArrayList<T>(...arr);
		else this.list = new ArrayList<T>();

	}

	protected iterHandler(index: number): T {

		return this.list.get(index) as T;

	}

	protected iterSize(): number {

		return this.list.size();

	}

	public pop(): T | undefined {

		const val: T | undefined = this.list.get(0);
		this.list.remove(0);

		return val;

	}

	public peek(): T | undefined {

		return this.list.get(0);

	}

	public push(value: T): void {

		this.list.add(value);

	}

	public fromArray(arr: T[]): void {

		this.list = new ArrayList<T>(...arr);

	}

	public toArray(): T[] {

		return this.list.toArray();

	}

}
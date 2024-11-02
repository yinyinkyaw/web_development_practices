export function setupCounter(element: HTMLButtonElement, styleEl: HTMLElement) {
  let counter = 0;
  let queue: Array<any> = [];
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Run ${counter > 0 ? counter : ""}`;
  };
  element.addEventListener("click", () => {
    setCounter(counter + 1);
    queue.push(() => getProgress(styleEl));

    if (queue.length === 1) {
      runProgress(queue, () => setCounter(counter - 1));
    }
  });
  setCounter(0);
}

export function getProgress(element: HTMLElement): Promise<string> {
  return new Promise(function (resolve) {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        element.style.width = `${i + 1}%`;
        if (i === 100 - 1) {
          resolve("complete");
          element.style.width = "0%";
        }
      }, 100 * i);
    }
  });
}

export async function runProgress(arg: Array<any>, fn: any) {
  while (arg.length >= 0) {
    const current = arg[0];
    await current();
    arg.shift();
    fn();
  }
}

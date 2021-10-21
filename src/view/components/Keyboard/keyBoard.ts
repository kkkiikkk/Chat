type NPD = Array<[string, number ]>
type NPDS = [Array<[string, number]>, Array<[string, number]>]

const firstLine: NPD = [[ '1', 49 ], [ '2', 50 ], [ '3', 51 ], [ '4', 52 ], [ '5', 53 ], [ '6', 54 ], [ '7', 55 ], [ '8', 56 ], [ '9', 57 ], [ '0', 48 ]];

const transformer = (arrayOfData: NPD) => arrayOfData.map(([ keyValue,  keyCode ]) => ({
    keyValue, keyCode,
}));


const sescondLine: NPDS = [[[ 'й', 81 ], [ 'ц', 87 ], [ 'у', 69 ], [ 'к', 82 ], [ 'е', 84 ],  [ 'н', 89 ],  [ 'г', 85 ], [ 'ш', 73 ], [ 'щ', 79 ], [ 'з', 80 ], [ 'х', 219 ]], [[ 'q', 81 ], [ 'w', 87 ], [ 'e', 69 ], [ 'r', 82 ], [ 't', 84 ], [ 'y', 89 ], [ 'u', 85 ], [ 'i', 73 ], [ 'o', 79 ], [ 'p', 80 ]]];
const tescondLine: NPDS = [[[ 'ф', 65 ], [ 'ы', 83 ], [ 'в', 68 ], [ 'а', 70 ], [ 'п', 71 ], [ 'р', 72 ], [ 'о', 74 ], [ 'л', 75 ], [ 'д', 76 ], [ 'ж', 186 ], [ 'э', 222 ]], [[ 'a', 65 ], [ 's', 83 ], [ 'd', 68 ], [ 'f', 70 ], [ 'g', 71 ], [ 'h', 72 ], [ 'j', 74 ], [ 'k', 75 ], [ 'l', 76 ]]];
const tescosndLine: NPDS = [[[ 'я', 90 ], [ 'ч', 88 ], [ 'с', 67 ], [ 'м', 86 ], [ 'и', 66 ], [ 'т', 78 ], [ 'ь', 77 ], [ 'б', 188 ], [ 'ю', 190 ]], [[ 'z', 90 ], [ 'x', 88 ], [ 'c', 67 ], [ 'v', 86 ], [ 'b', 66 ], [ 'n', 78 ], [ 'm', 77 ]]];

export const keyBoardButton = {
    firstLine:    transformer(firstLine),
    sescondLine:  sescondLine,
    tescondLine:  tescondLine,
    tescosndLine: tescosndLine,
};

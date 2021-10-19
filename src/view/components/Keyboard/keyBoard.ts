type NPD = Array<[string, string ]>
type NPDS = [string[], string[]]

const firstLine: NPD = [[ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ '4', '4' ], [ '5', '5' ], [ '6', '6' ], [ '7', '7' ], [ '8', '8' ], [ '9', '9' ], [ '0', '0' ]];

const transformer = (arrayOfData: NPD) => arrayOfData.map(([ keyRuValue,  keyEnValue ]) => ({
    keyRuValue, keyEnValue,
}));


const sescondLine: NPDS = [[ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х' ], [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ]];
const tescondLine: NPDS = [[ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э' ], [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ]];
const tescosndLine: NPDS = [[ 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю' ], [ 'z', 'x', 'c', 'v', 'b', 'n', 'm' ]];

export const keyBoardButton = {
    firstLine:    transformer(firstLine),
    sescondLine:  sescondLine,
    tescondLine:  tescondLine,
    tescosndLine: tescosndLine,
};

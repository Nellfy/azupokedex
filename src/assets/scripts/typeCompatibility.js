class TypeInfo {
  constructor(id, type, compatibility, tmp) {
    this.id = id
    this.type = type
    this.compatibility = compatibility
  }

  getCompatibilityList() {
    let result = []
    for (let i = 0; i < 18; i++) {
      result[i] = {
        id: TYPES[i].id,
        type: TYPES[i].type,
        damage: this.compatibility[i]
      }
    }
    return result
  }

  typeMatch(arg) {
    return this.type === arg
  }

  multiTypeMatch(args) {
    return args.includes(this.type)
  }
}

const typeList = [
  'ノーマル',
  'ほのお',
  'みず',
  'でんき',
  'くさ',
  'こおり',
  'かくとう',
  'どく',
  'じめん',
  'ひこう',
  'エスパー',
  'むし',
  'いわ',
  'ゴースト',
  'ドラゴン',
  'あく',
  'はがね',
  'フェアリー'
]

// タイプ相性一覧
const TYPES = [
  new TypeInfo(1, 'ノーマル', [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]),
  new TypeInfo(2, 'ほのお', [1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5]),
  new TypeInfo(3, 'みず', [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1]),
  new TypeInfo(4, 'でんき', [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1]),
  new TypeInfo(5, 'くさ', [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  new TypeInfo(6, 'こおり', [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]),
  new TypeInfo(7, 'かくとう', [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2]),
  new TypeInfo(8, 'どく', [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5]),
  new TypeInfo(9, 'じめん', [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1]),
  new TypeInfo(10, 'ひこう', [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1]),
  new TypeInfo(11, 'エスパー', [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1]),
  new TypeInfo(12, 'むし', [1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1]),
  new TypeInfo(13, 'いわ', [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1]),
  new TypeInfo(14, 'ゴースト', [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1]),
  new TypeInfo(15, 'ドラゴン', [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2]),
  new TypeInfo(16, 'あく', [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2]),
  new TypeInfo(17, 'はがね', [0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5]),
  new TypeInfo(18, 'フェアリー', [1, 1, 1, 1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 1, 0, 0.5, 2, 1]),
]

/**
 * 引数で受け取ったタイプの情報を取得
 * 
 * @param { string[] } argList 
 * @return { object[] }
 */
let getTypeInfo = (typeName) => {
  return TYPES.find(typeInfo => {
    return typeInfo.typeMatch(typeName)
  }).getCompatibilityList()
}

let getMultiTypeInfo = (typeList) => {
  let tmp = []
  TYPES.forEach(typeInfo => {
    if (typeInfo.multiTypeMatch(typeList)) {
      tmp.push(typeInfo.getCompatibilityList())
    }
  })
  let result = []
  for (let i = 0; i < 18; i++) {
    result.push({
      id: tmp[0][i].id,
      type: tmp[0][i].type,
      damage: tmp[0][i].damage * tmp[1][i].damage
    })
  }
  return result
}

let main = (typeList) => {
  let result = []
  if (typeList.length === 1) {
    result = getTypeInfo(typeList[0])
  } else if (typeList.length === 2) {
    result = getMultiTypeInfo(typeList)
  }
  return result.sort((typeA, typeB) => {
    return typeB.damage - typeA.damage || typeA.id - typeB.id
  })
}

module.exports = { getTypeInfo, main }
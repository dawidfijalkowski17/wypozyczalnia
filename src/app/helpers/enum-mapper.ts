export function mapEnumToArray(enumOptions: any) {
    return Object.keys(enumOptions)
              .map(key => ({ name: key }))
 }
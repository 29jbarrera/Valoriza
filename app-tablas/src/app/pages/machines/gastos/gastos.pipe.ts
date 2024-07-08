// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterGastos',
//   standalone:true,
// })
// export class FilterGastosPipe implements PipeTransform {
//   // transform(gastos: GastosTaller[], search_term: any): GastosTaller[] {
//   //   if (!gastos || !search_term) {
//   //     return gastos;
//   //   }

//   //   return gastos.filter(gasto => {
//   //     return (
//   //       (search_term.centerProvider ? gasto.centerProvider.toLowerCase().includes(search_term.centerProvider.toLowerCase()) : true) &&
//   //       (search_term.delegation ? gasto.delegation.toLowerCase().includes(search_term.delegation.toLowerCase()) : true) &&
//   //       (search_term.date.from ? new Date(gasto.date) >= new Date(search_term.date.from) : true) &&
//   //       (search_term.provider ? gasto.provider.toLowerCase().includes(search_term.provider.toLowerCase()) : true) &&
//   //       (search_term.amount ? gasto.amount >= search_term.amount : true) &&
//   //       (search_term.currency ? gasto.currency.toLowerCase().includes(search_term.currency.toLowerCase()) : true) &&
//   //       (search_term.materialReference ? gasto.materialReference.toLowerCase().includes(search_term.materialReference.toLowerCase()) : true) &&
//   //       (search_term.descriptionRefMaterial ? gasto.descriptionRefMaterial.toLowerCase().includes(search_term.descriptionRefMaterial.toLowerCase()) : true) &&
//   //       (search_term.quantity ? gasto.quantity >= search_term.quantity : true) &&
//   //       (search_term.switchableCost !== undefined ? gasto.switchableCost === search_term.switchableCost : true) &&
//   //       (search_term.description ? gasto.description.toLowerCase().includes(search_term.description.toLowerCase()) : true) &&
//   //       (search_term.deliveryNote ? gasto.deliveryNote.toLowerCase().includes(search_term.deliveryNote.toLowerCase()) : true) &&
//   //       (search_term.file ? gasto.file.toLowerCase().includes(search_term.file.toLowerCase()) : true)
//   //     );
//   //   });
//   // }
// }
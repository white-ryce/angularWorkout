import { Component } from '@angular/core';

@Component({
  selector: 'app-benchpress-comp',
  templateUrl: './benchpress-comp.component.html',
  styleUrls: ['./benchpress-comp.component.css']
})
export class BenchpressCompComponent 
{
  ngOnInit(): void 
  {
    
  }

  writeToBench()
    {
      //Write to bench.txt
      /*
      var fs = require('fs');
      const x = 4
      fs.appendFile('bench.txt',x,(err: any) => 
      {
        if(err)
        {
          console.error(err);
        }
      })
      */
    }

}

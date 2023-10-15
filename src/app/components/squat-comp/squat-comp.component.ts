import { Component } from '@angular/core';

@Component({
  selector: 'app-squat-comp',
  templateUrl: './squat-comp.component.html',
  styleUrls: ['./squat-comp.component.css']
})
export class SquatCompComponent {
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

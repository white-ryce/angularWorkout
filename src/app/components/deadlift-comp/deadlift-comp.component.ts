import { Component } from '@angular/core';

@Component({
  selector: 'app-deadlift-comp',
  templateUrl: './deadlift-comp.component.html',
  styleUrls: ['./deadlift-comp.component.css']
})
export class DeadliftCompComponent {
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

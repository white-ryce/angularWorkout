import { Component } from '@angular/core';

@Component({
  selector: 'app-shoulderpress-comp',
  templateUrl: './shoulderpress-comp.component.html',
  styleUrls: ['./shoulderpress-comp.component.css']
})
export class ShoulderpressCompComponent {
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

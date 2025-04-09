import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import grapesjs, { Editor } from 'grapesjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'a16';

  editor: Editor;

  @ViewChild('editor') editorRef!: ElementRef;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const editor = grapesjs.init({
      container: this.editorRef.nativeElement,
      height: '100vh',
      width: 'auto',
      fromElement: false,
      storageManager: false,
      plugins: [], // Add grapesjs-plugin-mjml here if using
      // plugins: [grapesjsMjml],
    });
    
     // 🧱 Add basic blocks manually
     const blockManager = editor.BlockManager;

     blockManager.add('text', {
       label: 'Text',
       content: '<div data-gjs-type="text">Insert your text here</div>',
       category: 'Basic',
     });
 
     blockManager.add('image', {
       label: '<i class="fa fa-image" style="font-size:2.5rem"></i><div>Image</div>',
       content: { type: 'image' },
       category: 'Basic',
     });
 
     blockManager.add('link', {
       label: 'Link',
       content: '<a href="https://example.com" target="_blank">Example Link</a>',
       category: 'Basic',
     });
 
     blockManager.add('2-columns', {
       label: '2 Columns',
       content: `
         <div class="row" style="display: flex;">
           <div class="column" style="flex: 1; padding: 10px;">Column 1</div>
           <div class="column" style="flex: 1; padding: 10px;">Column 2</div>
         </div>`,
       category: 'Layout',
     });
 
     blockManager.add('button', {
       label: 'Button',
       content: '<button style="padding:10px 20px; border:none; background:#28a745; color:white;">Click me</button>',
       category: 'Basic',
     });
  }


}

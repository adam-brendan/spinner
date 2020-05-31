const spinner = ['|', '/', '-','\\', '|', '/', '-', '\\', '|', '\n' ];
let counter = 100;
for(const animation of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${animation} `);    
  }, counter += 200);
};
  

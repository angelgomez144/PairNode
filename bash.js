process.stdout.write('prompt >');

process.stdin.on('data',(data)  => {
    if (data.toString().trim() === 'pwd'){
        process.stdout.write(process.cwd());
    }
    
    process.stdout.write('\nprompt > ');

});
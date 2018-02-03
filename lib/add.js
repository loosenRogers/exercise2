function add1(a,b) {
  // 实现该函数
  var result = [], count = 0;

  if(a.length < b.length)  b=[a, a=b][0];  // 长字符串为a,短字符串为b
  b=Array(a.length-b.length+1).join('0')+b;

  var arrA = a.split('');
  var arrB = b.split('');
  for(var j=0; j<a.length; j++) {
    var temp = (Number(arrA.pop()) + Number(arrB.pop())) +count;
    temp>=10?[temp,count]=[temp-10,1]:count=0;
    result.push(temp);
  }
  result.push(count);

  return result.reverse().join('').replace(/^0+/,'');
}

function add(a,b){
  a = a.split('');
  b = b.split('');
  var result = '',
      rest = 0;
  while( a.length || b.length || rest ){
    rest += ~~a.pop() + ~~b.pop();
    result = rest % 10 + result;
    rest = rest > 9;
  }

  return result.replace(/^0+/,'');
}

module.exports = add

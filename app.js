
alert(`                                                  Xush kelibsiz
                                              clubcity ga kirish
                                            uchun registratsiyadan
                                                otishingiz kerak`)

var name = prompt('Iltimos ismingizni kiriting: ', 'Firdavs')

var age  = Number(prompt('Iltimos haqiqiy yoshingizni kiriting: ', '-100'))

if (age >= 16) {
  alert('Clubcity ga xush kelibsiz, tanlov uchun rahmat!')
}else if (age <= 0){
  alert(name + ' haqiqiy yoshingizni kiriting!!!')
}else{
  alert(name + ' club city ga 16dan kottalar kirishi mumkin siz esa 16dan kichiksiz! ')
}
function add_money()
{
    var value = parseInt(document.getElementById('bitch_you_money').value,0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('bitch_you_money').value = value;
}
test("deposit", function() {
deepEqual(deposit(1000, 100), 1100, "made $100 deposit");
});

test("withdraw", function() {
deepEqual(withdraw(1000, 100), 900, "made $100 withdrawal");
});
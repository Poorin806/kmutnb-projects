import math

def rsa_keys(p, q, e):
    n = p * q
    phi = (p - 1) * (q - 1)
    if math.gcd(e, phi) != 1:
        e = 3
        while math.gcd(e, phi) != 1:
            e += 2
    d = pow(e, -1, phi)
    return (e, n), (d, n)

def enc(m, pub):
    e, n = pub
    return pow(m, e, n)

def dec(c, priv):
    d, n = priv
    return pow(c, d, n)

p = 907
q = 773
e = 11
public_key, private_key = rsa_keys(p, q, e)

m = 4
c = enc(m, public_key)
m2 = dec(c, private_key)

print(
  "LCM:", math.lcm(p - 1, q - 1)
)
print("Public Key:", public_key)
print("Private Key:", private_key)
print("Ciphertext:", c)
print("Decrypted:", m2)
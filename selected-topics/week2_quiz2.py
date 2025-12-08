import numpy as np
import scipy.stats as stats

# Example data of student scores
data = [21, 15, 45, 56, 35, 34, 55, 62, 84, 71, 92, 48, 98]

# --- Calculation of Descriptive Statistics ---

# Minimum and Maximum
minimum = np.min(data)
maximum = np.max(data)

# Mean
mean = np.mean(data)

# Median
median = np.median(data)

# Mode
# ใช้ .mode(data)[0][0] เพื่อดึงค่า Mode ออกมา เนื่องจาก SciPy อาจส่งคืนค่ามากกว่า 1 ตัว
try:
    mode_result = stats.mode(data, keepdims=False)
    mode = mode_result.mode
except TypeError:
    # สำหรับเวอร์ชัน SciPy เก่ากว่า
    mode = stats.mode(data)[0][0]


# Range
data_range = maximum - minimum

# Variance (ddof=1 for sample variance)
variance = np.var(data, ddof=1)

# Standard Deviation (ddof=1 for sample standard deviation)
std_dev = np.std(data, ddof=1)

# Interquartile Range (IQR)
# Q1: 25th percentile
Q1 = np.percentile(data, 25) 
# Q3: 75th percentile
Q3 = np.percentile(data, 75)
iqr = Q3 - Q1


# --- Printing the results ---
print("Descriptive Statistics:")
print(f"Minimum: {minimum}")
print(f"Maximum: {maximum}")
print(f"Mean: {mean:.2f}") # .2f คือแสดงทศนิยม 2 ตำแหน่ง
print(f"Median: {median}")
print(f"Mode: {mode}")
print(f"Range: {data_range}")
print(f"Variance: {variance:.2f}")
print(f"Standard Deviation: {std_dev:.2f}")
print(f"Interquartile Range (IQR): {iqr}")
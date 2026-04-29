# Remote Development Project Report

**Student Name**: XIAO Zhihao
**Student ID**: ZY2557109

## Linux command exercise

1. **ls**: List files and directories in the current directory.
   - **Usage**: `ls`
   - **Options**: 
     - `-a`: Show all files, including hidden ones.
     - `-l`: Show file details in long format.
     - `-l -l`: Long format with all files, including hidden ones.

2. **cd**: Change directory.
   - **Usage**: `cd [directory]`
   - **Options**: 
     - `-`: Change to the parent directory.
     - `/`: Change to the root directory.

3. **mkdir**: Create a directory.
   - **Usage**: `mkdir [directory]`
   - **Options**: 
     - `-p`: Create parent directories as needed.
     - `-m`: Set the mode of the new directory.

4. **rm**: Remove files or directories.
   - **Usage**: `rm [file/directory]`
   - **Options**: 
     - `-r`: Recursively remove directories.
     - `-f`: Force removal, without prompting.

5. **touch**: Create or update a file.
   - **Usage**: `touch [file]`
   - **Example**: `touch test.txt`

6. **cat**: Display the content of a file.
   - **Usage**: `cat [file]`
   - **Example**: `cat test.txt`

7. **cp**: Copy a file or directory.
   - **Usage**: `cp [source] [destination]`
   - **Example**: `cp test.txt test_backup.txt`

## Implementation Details

## Python Language Implementation

**Source Code**: 
Below is the implementation of matrix multiplication using standard Python lists. The script includes comments explaining the initialization and calculation logic.

```python
def matrix_multiply(matrix_a, matrix_b):
    # Determine the dimensions of the matrices
    rows_a = len(matrix_a)
    cols_a = len(matrix_a[0])
    rows_b = len(matrix_b)
    cols_b = len(matrix_b[0])
    
    # Check if matrices can be multiplied
    if cols_a != rows_b:
        raise ValueError("Incompatible matrices: cols of A must equal rows of B.")
        
    # Initialize the result matrix with zeros
    result = [[0 for _ in range(cols_b)] for _ in range(rows_a)]
    
    # Perform matrix multiplication using nested loops
    for i in range(rows_a):
        for j in range(cols_b):
            for k in range(cols_a):
                result[i][j] += matrix_a[i][k] * matrix_b[k][j]
                
    return result

if __name__ == "__main__":
    # Define small matrices for testing
    A = [[1, 2], [3, 4]]
    B = [[5, 6], [7, 8]]
    
    # Execute multiplication
    C = matrix_multiply(A, B)
    
    # Print the result
    print("Matrix A:")
    for row in A: print(row)
    print("\nMatrix B:")
    for row in B: print(row)
    print("\nResult Matrix C (A x B):")
    for row in C: print(row)

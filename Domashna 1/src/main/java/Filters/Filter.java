package Filters;

public interface Filter<T> {
    T execute(T input);
}
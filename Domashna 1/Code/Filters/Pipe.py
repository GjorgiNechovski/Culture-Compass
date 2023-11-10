from abc import abstractmethod, ABC


class Pipe(ABC):
    @abstractmethod
    def execute(self, input):
        pass
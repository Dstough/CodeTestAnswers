namespace Autos
{
    public class Car : ICar
    {
        public string Name{get;set;}

        public Car()
        {
            Name = "Default Car";
        }

        public string toString()
        {
            return Name;
        }
    }
}
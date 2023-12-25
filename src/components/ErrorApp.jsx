export default function ErrorApp({ children }) {
    return (        
        <div className="text-center bg-danger text-white fw-bold p-3 mb-3 rounded">
            {children}            
        </div>        
    );
}
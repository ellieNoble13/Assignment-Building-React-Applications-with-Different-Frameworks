export default async function ProfilePage({ params }: any) {
    const { id } = await params;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            next: { revalidate: 10 }
        });


        if (!res.ok) throw new Error('Failed to fetch user');

        const user = await res.json();

        return (
            <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
                <a href="/">← Back Home</a>

                <h1 style={{ marginTop: '20px' }}>{user.name}</h1>

                <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    {/* We add a '?' here as a safety check for the city */}
                    <p><strong>City:</strong> {user?.address?.city || "Unknown City"}</p>
                </div>

                <p style={{ marginTop: '20px', color: 'gray' }}>Viewing ID: {id}</p>
            </div>
        );

    } catch (error) {
       return (
            <div style={{ padding: '40px' }}>
                <h1>Oops! The internet is being slow.</h1>
                <p>We couldn't reach the User API. Please refresh the page.</p>
                <a href="/">Go Back Home</a>
            </div>
        );
    }
}